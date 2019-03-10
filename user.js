exports.getFullAddress = (user)=>{
  let {street, city, province, postal} = user;
  if (!street) {
    return 'Invalid user';
  }
  return `${street}, ${city}, ${province}. ${postal}`;
};