import Link from 'next/link'
import paymentData from '../../payment-data.json'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0056a6] mb-4">
          MedGate Healthcare Payment Portal
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Welcome to MedGate&apos;s secure payment gateway. Make payments for medical services, 
          consultations, and healthcare packages securely.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {paymentData.usefulInfo.map((info, index) => (
          <div key={index} className="info-card">
            <h3 className="font-bold text-lg text-[#0056a6] mb-2">{info.title}</h3>
            <p className="text-gray-700">{info.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0056a6] mb-3">
            Ready to Make a Payment?
          </h2>
          <p className="text-gray-600 mb-6">
            Choose from multiple secure payment methods to complete your transaction.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {paymentData.paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#0056a6] transition-colors">
              <span className="text-2xl mr-4">{method.icon}</span>
              <div>
                <h3 className="font-medium">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/payment">
            <button className="btn-primary text-lg px-8 py-4">
              Proceed to Payment
            </button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            You&apos;ll be redirected to our secure payment page
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Need help? Contact our support team at payments@medgate.com</p>
      </div>
    </div>
  )
}