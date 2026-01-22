'use client';

import { useState } from 'react';
import PaymentInfo from './components/PaymentInfo';
import PaymentSuccess from './components/PaymentSuccess';
import Link from 'next/link';

export default function PaymentPage() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: 0,
    method: '',
    transactionId: '',
  });

  const handlePaymentSubmit = (amount: number, method: string) => {
    // Generate a fake transaction ID (in real app, this comes from your payment processor)
    const transactionId =
      'MG-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();

    setPaymentData({
      amount,
      method,
      transactionId,
    });
    setPaymentCompleted(true);
  };

  const handleNewPayment = () => {
    setPaymentCompleted(false);
    setPaymentData({ amount: 0, method: '', transactionId: '' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-[#0056a6] hover:text-[#004085] flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0056a6] mb-3">MedGate Payment Portal</h1>
        <p className="text-gray-600">
          {paymentCompleted ? 'Payment Confirmation' : 'Complete your payment securely'}
        </p>
      </div>

      {!paymentCompleted ? (
        <>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="info-card">
              <h3 className="font-bold text-lg mb-3 text-[#0056a6]">Important Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All transactions are secure and encrypted
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No additional fees for credit card payments
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Instant payment confirmation
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-[#0056a6]">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                If you encounter any issues during payment, our support team is available 24/7.
              </p>
              <div className="text-sm text-gray-600">
                <p className="mb-1">+1 (555) 123-4567</p>
                <p>payments@medgate.com</p>
              </div>
            </div>
          </div>

          <PaymentInfo onAmountSubmit={handlePaymentSubmit} />
        </>
      ) : (
        <>
          <PaymentSuccess
            amount={paymentData.amount}
            method={paymentData.method}
            transactionId={paymentData.transactionId}
          />
          <div className="text-center mt-8">
            <button
              onClick={handleNewPayment}
              className="text-[#0056a6] hover:text-[#004085] font-medium"
            >
              Make another payment
            </button>
          </div>
        </>
      )}

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>MedGate Healthcare Payment Gateway is PCI DSS Level 1 certified</p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <span className="text-xs"> 256-bit SSL Encryption</span>
          <span className="text-xs"> Fraud Protection</span>
          <span className="text-xs">Verified by Visa/MasterCard SecureCode</span>
        </div>
      </div>
    </div>
  );
}
