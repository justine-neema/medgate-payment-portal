'use client';

import { useState } from 'react';
import paymentData from '../../../../payment-data.json';

interface PaymentInfoProps {
  onAmountSubmit: (amount: number, method: string) => void;
}

export default function PaymentInfo({ onAmountSubmit }: PaymentInfoProps) {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('credit_card');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (!amount || isNaN(numAmount)) {
      setError('Please enter a valid amount');
      return;
    }

    if (numAmount < paymentData.paymentInfo.minAmount) {
      setError(`Minimum amount is $${paymentData.paymentInfo.minAmount}`);
      return;
    }

    if (numAmount > paymentData.paymentInfo.maxAmount) {
      setError(`Maximum amount is $${paymentData.paymentInfo.maxAmount}`);
      return;
    }

    setError('');
    onAmountSubmit(numAmount, selectedMethod);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0056a6] mb-6">Payment Details</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Select Payment Method</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentData.paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedMethod(method.id)}
                className={`p-4 border rounded-lg text-center transition-all ${
                  selectedMethod === method.id
                    ? 'border-[#0056a6] bg-[#e6f2ff]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-2xl block mb-2">{method.icon}</span>
                <span className="font-medium block">{method.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Enter Amount ({paymentData.paymentInfo.currency})
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="number"
              step="0.01"
              min={paymentData.paymentInfo.minAmount}
              max={paymentData.paymentInfo.maxAmount}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-field pl-8"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Min: ${paymentData.paymentInfo.minAmount}</span>
            <span>Max: ${paymentData.paymentInfo.maxAmount}</span>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-3">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
