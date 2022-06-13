import {useServerProps} from '@shopify/hydrogen';
// Define a `LoadMore` component that takes `children` and `current` (the current
// number of products to display on the page) as props.
export default function LoadMore({children, current}) {
  const {setServerProps} = useServerProps();
  // Return the Load more button. Show the first products, and then
  // load three more products upon clicking the button.
  return (
    <div>
      {children}
      <div className="py-10 text-center">
        <button
          onClick={() => {
            setServerProps('first', current + 4);
          }}
          className="bg-secondary-7 rounded text-white py-3 px-8 font-bold"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
