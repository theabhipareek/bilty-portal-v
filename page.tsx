'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [formData, setFormData] = useState({
    consignorName: '',
    consignorGst: '',
    consigneeName: '',
    consigneeGst: '',
    description: '',
    weight: '',
    amount: '',
    insurance: 'no',
    gstPaidBy: 'consignor'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Receipt generated successfully!\n\n' + JSON.stringify(formData, null, 2))
  }

  return (
    <div className={`min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ${inter.className}`}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">ABHI ROAD CARRIER - Lorry Receipt Generator</h1>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Consignor's Name & Address</label>
                  <textarea
                    name="consignorName"
                    value={formData.consignorName}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter consignor's details"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Consignor's GST No</label>
                  <input
                    type="text"
                    name="consignorGst"
                    value={formData.consignorGst}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter GST number"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Consignee's Name & Address</label>
                  <textarea
                    name="consigneeName"
                    value={formData.consigneeName}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter consignee's details"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Consignee's GST No</label>
                  <input
                    type="text"
                    name="consigneeGst"
                    value={formData.consigneeGst}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter GST number"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Description (Said to Contain)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Weight"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Amount (Rs.)</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Amount"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Insurance</label>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="insurance"
                        value="yes"
                        checked={formData.insurance === 'yes'}
                        onChange={() => handleRadioChange('insurance', 'yes')}
                        className="form-radio h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="insurance"
                        value="no"
                        checked={formData.insurance === 'no'}
                        onChange={() => handleRadioChange('insurance', 'no')}
                        className="form-radio h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">GST Paid By</label>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gstPaidBy"
                        value="consignor"
                        checked={formData.gstPaidBy === 'consignor'}
                        onChange={() => handleRadioChange('gstPaidBy', 'consignor')}
                        className="form-radio h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">Consignor</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gstPaidBy"
                        value="consignee"
                        checked={formData.gstPaidBy === 'consignee'}
                        onChange={() => handleRadioChange('gstPaidBy', 'consignee')}
                        className="form-radio h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">Consignee</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600"
                >
                  Generate Lorry Receipt
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}