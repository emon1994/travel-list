export default function Stats({ items }) {
    if (!items.length) {
      return (
        <div className="stats">
          <em>Start adding some items to your list</em>
        </div>
      );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const perchantage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        {perchantage === 100
          ? "Ready to go!!!!"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${perchantage})%`}
      </footer>
    );
  }