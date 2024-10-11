interface Transaction {
    customerName: string;
    id: string;
    createdAt: string;
    sortingDate: string;
    money: number;
    description: string;
    transactionType: string;
  }
  
export function filterAndSortTransactions(transactions: Transaction[]): Transaction[] {
    // Convert createdAt strings to Date objects for proper sorting
    const parsedTransactions = transactions.map(transaction => ({
      ...transaction,
      sortingDate: new Date(transaction.sortingDate),
    }));
  
    // Sort transactions in descending order based on sortingDate
    parsedTransactions.sort((a, b) => b.sortingDate.getTime() - a.sortingDate.getTime());
  
    //@ts-ignore
    return parsedTransactions;
  }
  
export function filterTransactionsByType(transactions: Transaction[], type: string): Transaction[] {
    return transactions.filter(transaction => transaction.transactionType === type);
}

export function filterAndSortCreditTransactions(transactions: Transaction[]): Transaction[] {
  const creditTransactions = transactions.filter(transaction => transaction.transactionType === "CREDIT");

  // Sort credit transactions by money in descending order
  creditTransactions.sort((a, b) => b.money - a.money);

  return creditTransactions;
}



  