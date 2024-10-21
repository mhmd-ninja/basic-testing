// Uncomment the code below and write your tests
import lodash from 'lodash';
import { getBankAccount, BankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from '.';

const initialBalance = 1000;
let account: BankAccount;

describe('BankAccount', () => {
  beforeEach(() => {
    account = getBankAccount(initialBalance);
  });

  test('should create account with initial balance', () => {
    const BankAccount = getBankAccount(initialBalance);
    expect(BankAccount.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(1100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const anotherAccount = getBankAccount(200);
    expect(() => account.transfer(10000, anotherAccount)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(1000, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const depositMoney = 300;
    account.deposit(depositMoney);
    expect(account.getBalance()).toBe(initialBalance + depositMoney);
  });

  test('should withdraw money', () => {
    const withdrowMoney = 200;
    account.withdraw(withdrowMoney);
    expect(account.getBalance()).toEqual(initialBalance - withdrowMoney);
  });

  test('should transfer money', () => {
    const anotherAccount = getBankAccount(initialBalance);
    const transferMoney = 200;
    account.transfer(transferMoney, anotherAccount)
    expect(anotherAccount.getBalance()).toBe(initialBalance + transferMoney);
    expect(account.getBalance()).toEqual(initialBalance - transferMoney);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest
      .spyOn(lodash, 'random')
      .mockReturnValueOnce(500)
      .mockReturnValueOnce(1);

      const balanceFetch = await account.fetchBalance();
      expect(typeof balanceFetch).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(500);
    await account.synchronizeBalance();
    expect(account.getBalance()).toEqual(500)
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    return expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});