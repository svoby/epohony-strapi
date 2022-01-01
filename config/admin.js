module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0bc4f221bfcf498a2b1b029bdf45483c'),
  },
});
