const accountSchema = require("../config/accountSchema");

async function depositAmount(accountNum, amount) {
  const data = await accountSchema.findOne({ accountNum: accountNum });

  if (!data) {
    return null;
  }

  const update = await accountSchema.findOneAndUpdate(
    { accountNum: accountNum },
    {
      $set: {
        balance: data.balance + amount,
      },
    }
  );
  if (!update) {
    return null;
  } else {
    return update;
  }
}

async function withdrawAmount(accountNum, amount) {
  const data = await accountSchema.findOne({ accountNum: accountNum });

  if (!data) {
    return null;
  } else if (data.balance < amount) {
    return null;
  }

  const update = await accountSchema.findOneAndUpdate(
    { accountNum: accountNum },
    {
      $set: {
        balance: data.balance - amount,
      },
    }
  );
  if (!update) {
    return null;
  } else {
    return update;
  }
}

async function transferAmount(accountNum, accountNum2, amount) {
  const accountOrig = await accountSchema.findOne({ accountNum: accountNum });
  const accountDest = await accountSchema.findOne({ accountNum: accountNum2 }); //accountDest = account destination

  if (!accountOrig || !accountDest) {
    return null;
  } else if (accountOrig.balance < amount) {
    return null;
  } else {
    const updateOrig = await accountSchema.findOneAndUpdate(
      { accountNum: accountNum },
      {
        $set: {
          balance: accountOrig.balance - amount,
        },
      }
    );
    const updateDest = await accountSchema.findOneAndUpdate(
      { accountNum: accountNum2 },
      {
        $set: {
          balance: accountDest.balance + amount,
        },
      }
    );
    if (!updateOrig || !updateDest) {
      return null;
    } else {
      return updateOrig, updateDest;
    }
  }
}

module.exports = { depositAmount, withdrawAmount, transferAmount };
