import { useCallback, useEffect, useState } from 'react';

export const useGenBlurDataURL = (url: string) => {
  const [base64Url, setBase64Url] = useState('data:image/jpeg;base64,');

  const convertImageToBase64 = useCallback(async () => {
    const res = await fetch(url);
    if (res.ok) {
      const blob = await res.blob();
      const reader = new FileReader();

      reader.onload = function (event) {
        if (event?.target) {
          const base64String = (event.target.result as string).split(',')[1];

          setBase64Url((prev) => prev + base64String);
        }
      };

      reader.readAsDataURL(blob);
    }
  }, [url]);

  useEffect(() => {
    convertImageToBase64();
  }, [convertImageToBase64]);

  return { base64Url } as const;
};
