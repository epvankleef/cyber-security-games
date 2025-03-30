import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CryptoScamGame() {
  const [screen, setScreen] = useState("home");
  const [cryptoValue, setCryptoValue] = useState(100);
  const [invested, setInvested] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let interval;
    if (invested) {
      interval = setInterval(() => {
        setCryptoValue((prev) => prev * (0.95 + Math.random() * 0.1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [invested]);

  const handleInvest = () => {
    setInvested(true);
    setMessage("Je hebt geïnvesteerd in CryptoX! De waarde fluctueert...");
  };

  const handleRugPull = () => {
    setCryptoValue(0);
    setInvested(false);
    setMessage("De oprichters hebben al het geld gestolen! Je bent alles kwijt!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      {screen === "home" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="text-2xl font-bold mb-4">Crypto Scam Simulator</h1>
          <p className="mb-6">Ervaar hoe een rug pull scam werkt.</p>
          <Button onClick={() => setScreen("investmentApp")} className="bg-blue-500">Open CryptoX</Button>
        </motion.div>
      )}

      {screen === "investmentApp" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md text-center">
          <h2 className="text-xl font-semibold">CryptoX Investering</h2>
          <Card className="p-4 bg-gray-800 mt-4">
            <CardContent>
              <h3 className="text-lg font-bold">Huidige waarde: ${cryptoValue.toFixed(2)}</h3>
              <p className="text-sm text-gray-400">{message}</p>
            </CardContent>
          </Card>
          {!invested ? (
            <Button onClick={handleInvest} className="bg-green-500 mt-4">Investeren</Button>
          ) : (
            <Button onClick={handleRugPull} className="bg-red-500 mt-4">Rug Pull!</Button>
          )}
          <Button onClick={() => setScreen("home")} className="bg-gray-600 mt-4">Terug</Button>
        </motion.div>
      )}
    </div>
  );
}

