export const groupRecordsByPrice = (data) => {
  const costEffective = [];
  const bitPricier = [];
  const bigSpender = [];

  for (const item of data) {
    switch (item.price) {
      case "$":
        costEffective.push(item);
        break;

      case "$$":
        bitPricier.push(item);
        break;

      default:
        bigSpender.push(item);
        break;
    }
  }

  return [costEffective, bitPricier, bigSpender];
};