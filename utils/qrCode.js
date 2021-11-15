import QRCode from 'qrcode';

export const genQRcode = async (url) => {
    const QRcode = await QRCode.toDataURL(`https://pcrtest-centers.herokuapp.com${url}`);
    return QRcode;
}