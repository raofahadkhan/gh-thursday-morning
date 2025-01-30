import CheckoutButton from "../components/CheckoutButton";

export default function Home() {
  const products = [
    {
      name: "Gaming Mouse",
      price: 50,
      quantity: 1,
      image:
        "https://logitech.onlinesalestore.pk/cdn/shop/products/logitech-g102-lightsync-gaming-mouse-01-logitech-pakistan_1000x.jpg?v=1639386320", // ✅ Public Image URL
    },
    {
      name: "Mechanical Keyboard",
      price: 120,
      quantity: 1,
      image:
        "https://redragonzone.pk/cdn/shop/products/61nTQ6GRwiL._AC_SL1500_2048x2048.jpg?v=1627736981",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">
        Stripe Checkout with Product Images
      </h1>
      <CheckoutButton products={products} />
    </main>
  );
}
