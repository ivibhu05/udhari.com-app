interface Transaction {
    name: string;
    id: string;
    date: string;
    sortingDate: string;
    money: number;
    transactionType: string;
  }
  
  const transactions: Transaction[] = [
    // Your transactions data here
  ];
  
  export const sortedTransactions = transactions.sort((a, b) => {
    const dateA = new Date(a.sortingDate);
    const dateB = new Date(b.sortingDate);
  
    return dateB.getTime() - dateA.getTime();
  });
  
  console.log(sortedTransactions);
  