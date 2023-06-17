// app/layout.tsx

import { Providers } from "./providers";



export const metadata = {
  title: {
    default: 'Macks Builds LLC',
    template: '%s \ ',
  },
  description: 'We are dedicated to delivering quality solutions that bring your spaces to life. Whether youre looking to renovate your home, revamp your office, or create a stunning outdoor area, we have the expertise and passion to make it happen. Explore our range of services and let us help you transform your space into something extraordinary. Get ready to experience the power of quality craftsmanship and design excellence.',
  creator: 'Jack Rigan',
  keywords: ['Next.js', 'React', 'JavaScript', 'Macks Builds', 'Contracting Company in salt lake city utah', 'Contractor', 'Cheap Contracting', 'Salt Lake Contractors', 'Macks Builds LLC', 'Contracting Business'],
  
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
