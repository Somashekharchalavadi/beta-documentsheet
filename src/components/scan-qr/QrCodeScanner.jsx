import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
const QrCodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const startScanner = () => {
    setIsScanning(true);
  };

  const stopScanner = () => {
    setIsScanning(false);
  };

  const handleScan = (result) => {
    if (result) {
      window.location.href = result[0].rawValue;
      setIsScanning(false);
    }
  };

  const handleError = (err) => {
    setIsScanning(false);
    console.error('Scanning error:', err);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {isScanning && (
        <div className="w-full max-w-md  p-1  rounded-lg  shadow-md">
          <div className="h-96">
            <Scanner onScan={handleScan} onError={handleError} scanDelay={300} formats={['qr_code', 'ean_13', 'upc_a']} paused={false} />
          </div>
        </div>
      )}

      <div className="flex space-x-4">
        {isScanning ? (
          <>
            <button onClick={stopScanner} disabled={!isScanning} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg disabled:bg-gray-400">
              Stop
            </button>
          </>
        ) : (
          <>
            <button onClick={startScanner} disabled={isScanning} className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg disabled:bg-gray-400">
              Scan
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QrCodeScanner;
