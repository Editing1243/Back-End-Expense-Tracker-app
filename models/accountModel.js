const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);

const jwt = require(`jsonwebtoken`);
const JWT_SECRET = process.env.JWT_SECRET;

const accountSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, `Please provide valid User`],
    // [true, `Please provide User`],
  },
  email: {
    type: String,
    required: [true, `Please provide valid email adress`],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    // [true, `Please provide an email adress`]
  },
  password: { type: String, required: [true, `Please provide valid password`] },
});

accountSchema.pre(`save`, async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

accountSchema.methods.createToken = function () {
  return (token = jwt.sign(
    {
      accountId: this._id,
      user: this.user,
      email: this.email,
    },
    JWT_SECRET,
    {}
  ));
};

accountSchema.methods.comparePasswords = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

const Account = mongoose.model(`Account`, accountSchema);

module.exports = Account;

// Valid Email Examples

// simple@example.com
// very.common@example.com
// disposable.style.email.with+symbol@example.com
// other.email-with-dash@example.com
// fully-qualified-domain@example.com
// user.name+tag+sorting@example.com
// user_name@example.com
// x@example.com (one-letter local-part)
// example-indeed@strange-example.com
// test/test@test.com
// admin@mailserver1 (local domain name with no TLD)
// example@s.solutions (TLD with more than two letters)
// user@[192.168.1.1] (IPv4 address in domain)

// Invalid Email Examples

// plainaddress (missing "@" sign and domain)
// @missingusername.com (missing local part)
// username@.com (domain can't start with a dot)
// username@.com. (domain can't end with a dot)
// username@.com.. (domain can't have consecutive dots)
// username@com (missing top-level domain)
// username@.com.com (domain can't start with a dot)
// username@-example.com (domain can't start with a hyphen)
// username@111.222.333.44444 (invalid IP address)
// usern...ame@example.com (local part can't have consecutive dots)
// username@example..com (domain can't have consecutive dots)
// "username@example.com (unclosed quoted string)
// username@example.c (TLD must be at least two characters)
