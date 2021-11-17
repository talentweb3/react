
import Apply from '../models/apply.js';
import User from '../models/user.js';
import moment from 'moment';
// import sendgridMail from '@sendgrid/mail';
// import nodemailer from 'nodemailer';
import { generatePdfLab1 } from '../utils/generatePdfLab1.js';
import { generatePdfLab2 } from '../utils/generatePdfLab2.js';
import { generatePdfLab3 } from '../utils/generatePdfLab3.js';
import { generatePdfLab4 } from '../utils/generatePdfLab4.js';
import  cloudinary  from '../utils/cloudinary.js';
import Readable from 'stream';

export const addNewInfo = async (req, res) => {
    const check = await isExist();
    const time = Date.now();
    var createtime = moment(time).format('YYYY-MM-DD HH-mm-ss');
    var time2 = moment(time).clone().add(3, 'days');
    var validtime = time2.format('YYYY-MM-DD HH-mm-ss');

    const proBody = Object.assign(req.body, {'createAt':createtime},{'validAt':validtime});
    if (!check) {
      console.log(proBody);
      Apply.create(proBody, (err, row) => {
        if (err) return res.send('server err')
        res.send(row);
      })
    } else {
      Apply.findOneAndUpdate({passport: proBody.passport}, proBody, (err, row) => {
        if (err) return res.send('server err')
        res.send(row);
      })
    }
}

export const approved = (req, res) => {
    
    res.send('success');
}

export const getProposalList = async(req, res) => {
  const proposals = await Apply.find();
  res.send(proposals);  
}

export const updateProposal = async (req, res) => {
  console.log("update:", req.body);
  const time = Date.now();
  var updatetime = moment(time).format('YYYY-MM-DD HH-mm-ss');
  const proBody = Object.assign(req.body, {'createAt':updatetime});
  const proposal = await Apply.findByIdAndUpdate(req.param('id'), proBody);
  if (proposal) {
    res.send(proposal);
  } else {
    res.send('server err');
  }
}

export const deleteProposal = async (req, res) => {
  console.log("delete:", req.body);
  // const proposal =  await Apply.findById(req.param('id'));
  // if (proposal.pdfUrl) {
  //   await cloudinary.uploader.destroy(proposal.pdfUrl);
  // }
  const proposal = await Apply.findByIdAndDelete(req.param('id'));
  if (proposal) {
    res.send(proposal);
  } else {
    res.send('server err');
  }
}

export const fetchPdf = (req, res) => {

}

const isExist = async (passport) => {
    const check = await Apply.findOne({ passport: passport });
    if (check) {
        return true;
    } else {
        return false;
    }
}

const bufferUpload = async (buffer) => {
  return new Promise((resolve, reject) => {
    const writeStream = cloudinary.uploader.upload_stream({},(err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
    const readStream = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });
    readStream.pipe(writeStream);
  });
};

export const getApproved = async(req, res) => {
  console.log("approve:", req.param('id'));
  const time = Date.now();
  var resulttime = moment(time).format('YYYY-MM-DD HH-mm-ss');
  const proposal1 = await Apply.findByIdAndUpdate(req.param('id'), {'resultAt':resulttime});
  const proposal = await Apply.findByIdAndUpdate(req.param('id'), {state: 1});
  // const cloudinary_file_path = "https://http-dambr-net.mo.cloudinary.net/demo/image/upload/"; 
  const tmp_rep = "public/upload";
  // https://pcrtest-centers.herokuapp.com/
  var uploadfile;
  switch (proposal.docType) {
    case 1:
      uploadfile = await generatePdfLab1(proposal, `${tmp_rep}/${proposal._id}.pdf`);
      break;
    case 2:
      uploadfile = await generatePdfLab2(proposal, `${tmp_rep}/${proposal._id}.pdf`);
      break;
    case 3:
      uploadfile = await generatePdfLab3(proposal, `${tmp_rep}/${proposal._id}.pdf`);
      break;
    case 4:
      uploadfile = await generatePdfLab4(proposal, `${tmp_rep}/${proposal._id}.pdf`);
      break;
    default:
      break;
  }
  
  console.log(">>>>>>>>>>>>>>>>,,,,,,,,,,,,,," );
  
  const { buffer } = uploadfile;
  try {
    const { secure_url } = await bufferUpload(buffer);
    await Apply.findByIdAndUpdate(req.param('id'), {pdfUrl: secure_url});
    res.status(200).send(`Successfully uploaded, url: ${secure_url}`);
  } catch (error) {
    res.send("Something went wrong please try again later..");
  }

  console.log(">>>>>>>>>>>>>>>>,,,,,,,,,,,,,," );
  

  // cloudinary.uploader.upload(`${tmp_rep}/${proposal._id}.pdf`,{tags: 'basic_sample',public_id:`${proposal._id}`}, function(err,proposal) {
  //   console.log();
  //   console.log("** Stream Upload");
  //   if (err){ console.warn(err);}
  //   console.log("* Same image, uploaded via stream");
  //   console.log("* "+proposal._id);
    
  // });


  // console.log("approve:resultfie", resultfile);
  // await Apply.findByIdAndUpdate(req.param('id'), {pdfUrl: `/${cloudinary_file_path}/${req.param('id')}.pdf`});
  // res.send('success');
}



export const getDeclined = async (req, res) => {
  console.log("decline:", req.param('id'));
  const proposal = await Apply.findByIdAndUpdate(req.param('id'), {state: 3});  
  res.send('success');
}

export const viewRequest = async (req, res) => {
  console.log("view",req.param('id'));
  // const proposal = await Apply.findByIdAndUpdate(req.body, {state: 1});
  // await generatePdfLab2(proposal, `${cloudinary_file_path}${proposal._id}.pdf`);
  // await Apply.findByIdAndUpdate(req.param('_id'), {pdfUrl: `/upload/${req.param('_id')}.pdf`});
  const proposal1 = await Apply.findById(req.param('id'));  
  const viewurl = proposal1.pdfUrl;
  // const url = proposal1.pdfUrl;
  // const url = `/${tmp_rep}/${proposal1._id}`;
  // console.log(url);
  // var veiwUrl;
  // if (process.env.NODE_ENV !== 'production')
  //     veiwUrl = `http://localhost:8000${url}`;
  // else
  //     veiwUrl = `https://pcrtest-centers.herokuapp.com/${url}`;
  res.send(viewurl);
}


// sendgridMail.setApiKey("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");

export const sendMail = async (req, res) => {
  
  console.log(req.body);
  const proposal = await Apply.findById(req.body); 
  const user = await User.findById(proposal.userId);
  let email = user.email;
  let urlinfo = proposal.pdfUrl;  
  let name = proposal.name;
  console.log(email, urlinfo, name);
  
  var realUrl=`http://localhost:8000/${urlinfo}`;
  // if (process.env.NODE_ENV !== 'production')
  //   realUrl = `http://localhost:8000/${urlinfo}`;
  // else
  //   realUrl = `http://${process.env.PRODUCTION_URL}${urlinfo}`;
  // res.send(realUrl);
  try {
      await new SendpdfEmail(user, realUrl).sendUrl();
      console.log(">>>>>>>>>");
      
     
      res.status(200).json({
          status: 'success',
          message: 'Success'
      });
  } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Error'
      })
  }
}