import React, { useState } from 'react'
import ProductInterface from '../../interfaces/product.interface'

const ProductItem: React.FC<{ data: ProductInterface }> = ({ data }) => {
    const [showSpecifications, setShowSpecifications] = useState(false)

    const toggleSpecifications = () => {
        setShowSpecifications(!showSpecifications)
    }

    return (
        <div className="relative w-full border-b border-gray-200 rounded-t-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <a
                href={data.url}
                target="_blank"
                className="flex px-4 py-2 text-sm font-medium"
            >
                <div className="mr-[20px]">
                    <img
                        width="150"
                        height="100"
                        src={data.profileImage}
                        alt={data.title}
                    />
                </div>
                <div className="w-[900px] flex flex-col">
                    <div className="mb-3">
                        <b className="mb-[10px]">{data.title}</b>
                    </div>
                    <div className="mb-3">
                        <p>{data.subtitle}</p>
                    </div>
                    <div>
                        <p>{data.type}</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 mr-4 mt-2">
                    {data.price} {data.currency}
                </div>
            </a>
            <button
                onClick={toggleSpecifications}
                className="w-full px-4 py-2 text-left text-sm font-medium border-t border-gray-200 rounded-b-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
            >
                {showSpecifications
                    ? 'Hide Specifications'
                    : 'Show Specifications'}
            </button>
            {showSpecifications && (
                <div className="p-4 bg-gray-100 dark:bg-gray-700">
                    {Object.entries(data.specifications).map(([key, value]) => (
                        <div key={key} className="mb-2">
                            <strong>{key}:</strong>{' '}
                            {typeof value === 'object' && value !== null ? (
                                <ul className="ml-4 list-disc">
                                    {Object.entries(value).map(
                                        ([subKey, subValue]) => (
                                            <li key={subKey}>
                                                {subKey}: {subValue}
                                            </li>
                                        )
                                    )}
                                </ul>
                            ) : (
                                value
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductItem
