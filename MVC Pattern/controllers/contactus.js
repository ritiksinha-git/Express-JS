exports.getContactus=(req, res, next) => {
    res.render('contact_us', {
    pageTitle: 'Contact Us',
    path: '/contact-us',
    formsCSS: true,
  });
}