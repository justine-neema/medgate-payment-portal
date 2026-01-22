'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface PaymentSuccessProps {
  amount: number;
  method: string;
  transactionId: string;
}

export default function PaymentSuccess({ amount, method, transactionId }: PaymentSuccessProps) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // In a real app, you might redirect automatically
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-[#0056a6] mb-3">Payment Successful!</h2>
        <p className="text-gray-600 mb-8">Your payment has been processed successfully.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <h3 className="font-bold text-lg mb-4 text-[#0056a6]">Transaction Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Paid:</span>
            <span className="font-bold text-lg">${amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium">{method}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID:</span>
            <span className="font-mono text-sm">{transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time:</span>
            <span>{new Date().toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="text-green-600 font-medium">Completed ✓</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          A confirmation email has been sent to your registered email address.
        </p>
        <p className="text-sm text-gray-500">Keep this transaction ID for your records.</p>

        <div className="pt-6 border-t">
          <Link href="/">
            <button className="btn-secondary px-8">
              Return to Homepage {countdown > 0 && `(${countdown})`}
            </button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">Need help? Contact support@medgate.com</p>
        </div>
      </div>
    </div>
  );
}
