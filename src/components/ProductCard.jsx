import {Suspense} from 'react';
import {Image, Link} from '@shopify/hydrogen';

import MoneyCompareAtPrice from './MoneyCompareAtPrice.client';
import MoneyPrice from './MoneyPrice.client';

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export default function ProductCard({product}) {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className="text-xs md:text-sm lg:text-base relative rounded-md shadow-lg p-5 bg-white">
      <Link to={`/products/${product.handle}`}>
        <div className="">
          {selectedVariant.image ? (
            <Image className="" data={selectedVariant.image} />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className="absolute top-3 left-3 rounded-3xl text-xs bg-black text-white py-3 px-4">
              Out of stock
            </div>
          )}
        </div>

        <span className="text-secondary-8 font-semibold mb-0.5">
          {product.title}
        </span>

        {product.vendor && (
          <p className="text-gray-900 font-medium text-sm mb-0.5">
            {product.vendor}
          </p>
        )}
        <div className="flex flex-col justify-between mt-4">
          <Suspense fallback={null}>
            <MoneyPrice money={selectedVariant.priceV2} />
          </Suspense>
          {selectedVariant.compareAtPriceV2 && (
            <Suspense fallback={null}>
              <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
            </Suspense>
          )}
        </div>
      </Link>
    </div>
  );
}
