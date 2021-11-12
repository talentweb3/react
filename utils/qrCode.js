import QRCode from 'qrcode';

export const genQRcode = async (url) => {
    const QRcode = await QRCode.toDataURL(`http://localhost:8000/${url}`);
    return QRcode;
}