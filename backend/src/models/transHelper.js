const accountSchema = require("../config/accountSchema");
//const transactionSchema = require("../config/transactionSchema");





const depositAmount = (accountNum, amount) => {
  accountSchema.findOne({ accountNum: accountNum }, (err, data) => {
    if (err || data == "") {
      return new Error("Failed ");
    } else {
      accountSchema.findOneAndUpdate(
        { accountNum: accountNum },
        {
          $set: {
            balance: data.balance + amount,
          },
        },
        (err) => {
          if (err) {
            return new Error("Failed ");
          }
        }
      );
    }
  });
};


// const depositAmount = (accountNum, amount) => {
//   const data = accountSchema.findOne({ accountNum: accountNum });
//   if (data == "") {
//     return new Error(`Account not found! Error: ${err}`);
//   } else {
//     accountSchema.findOneAndUpdate(
//       { accountNum: accountNum },
//       {
//         $set: {
//           balance: data.balance + amount,
//         },
//       }
//     );
//   }
// };

module.exports = { depositAmount };
