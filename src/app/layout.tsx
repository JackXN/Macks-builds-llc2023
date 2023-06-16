// app/layout.tsx

import { Providers } from "./providers";



export const metadata = {
  title: 'Macks Builds LLC',
  description: 'Macks Builds LLC Construction company'
}


// Loader
import Loader from '../components/Loader';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay of 2000 milliseconds
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);


  return (
<>
    <html lang="en">
      <body suppressHydrationWarning={true}>
       
        <Providers>{children}</Providers>
      
        </body>
    </html>
</>
);
}
