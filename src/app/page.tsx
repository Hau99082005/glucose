"use client";
import Container from "@/components/Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { Toaster, toast } from "sonner"; 

export default function Home() {
  const handleAppStore = () => {
    toast.success("Redirecting to App Store!!");
  };

  const handleAppGooglePlay = () => {
    toast.success("Redirecting to Google Play!");
  }

  return (
    <Container>
      <div className="min-h-screen flex flex-col text-gray-800 relative bg-white">
        <Toaster richColors position="top-center" />
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between p-8 max-w-7xl mx-auto w-full">
          <div className="flex-1 space-y-6 mt-10 lg:mt-0 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center space-x-3">
              <Image src="/image/water.jpg" alt="logo" width={60} height={60} />
              <h1 className="text-blue-800 font-bold" style={{ fontSize: "40px", textTransform: "uppercase", fontFamily: "Lato" }}>
                glucose
              </h1>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900" style={{ fontFamily: "Lato" }}>
              Track your blood sugar levels
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
              An easy way to monitor your glucose levels and manage your diabetes effectively.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start mt-6">
              <button onClick={handleAppStore} className="flex items-center bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-700 transition shadow-lg">
                <FaApple className="text-3xl mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-xs">Download on the</p>
                  <p className="font-bold text-lg" style={{ fontFamily: "Lato" }}>
                    App Store
                  </p>
                </div>
              </button>
              <button onClick={handleAppGooglePlay} className="flex items-center bg-green-800 text-white px-5 py-3 rounded-xl hover:bg-green-400 transition shadow-lg">
                <Image src="/image/google-play.png" alt="Google Play" width={30} height={30} className="mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-bold text-lg" style={{ fontFamily: "Lato" }}>
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 hidden lg:flex justify-center">
            <Image src="/image/glucose.jpg" alt="App preview" width={400} height={400} className="rounded-2xl shadow-xl" />
          </div>
        </section>
        <section className="py-10 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <Image src="/image/note.jpg" alt="Blood Sugar Logging" width={50} height={50} />
                <h4 className="text-xl font-semibold mt-4">Easy Logging</h4>
                <p className="text-gray-600 mt-2">Quickly record your glucose, weight, blood pressure ang insulin readings with serveral tags.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
               <Image src={'/image/insignt.png'} alt="insight" width={50} height={50}/>
               <h4 className="text-xl font-semibold mt-4">Insights</h4>
               <p className="text-gray-600 mt-2">Visualize trends over days, weeks, and months. Alerts users when their levels reach critical zones</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <Image src="/image/z6546310489849_e9618ea5a9bd04a25def3011bccb6c14.jpg" alt="Detailed Analytics" width={50} height={50} />
                <h4 className="text-xl font-semibold mt-4">Smart Analytics</h4>
                <p className="text-gray-600 mt-2">Visualize trends over days, weeks, and months. Alerts users when their levels reach critical zones</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <Image src="/image/anh3.jpg" alt="Reminders" width={50} height={50} />
                <h4 className="text-xl font-semibold mt-4">Custom Reminders</h4>
                <p className="text-gray-600 mt-2">Never forget to send timely reminders to help users take their medication as scheduled.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-4xl w-full mb-20 px-4 mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
      <Image src={'/image/preview.jpg'}  alt="" className="rounded-lg shadow-lg w-full object-cover"
        width={200} height={200} 
       />
      </div>
      <div className="flex-1">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left" style={{ fontSize: "30px", fontFamily: "Lato" }}>
      What Our Users Say
     </h2>
     <div className="flex flex-col gap-6">
      <Card>
        <CardContent className="p-3 text-black">
          <p className="text-gray-600 mb-2 font-semibold" style={{ fontSize: "16px", fontFamily: "Lato" }}>
          "Easy to use and extremely helpful for daily tracking."
          </p>
          <p className="text-right text-gray-500 text-sm">John D.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-3">
          <p className="text-gray-700 mb-2 font-semibold" style={{ fontSize: "16px", fontFamily: "Lato" }}>
          "The detailed graphs help me share better info with my doctor."
          </p>
          <p className="text-right text-gray-500 text-sm">Sarah W.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-3">
          <p className="text-gray-700 mb-2 font-semibold" style={{ fontSize: "16px", fontFamily: "Lato" }}>
          "Thanks to Glucose App, I have better control over my blood sugar levels!" 
          </p>
          <p className="text-right text-gray-500 text-sm">Tam L.</p>
        </CardContent>
      </Card>
      </div>
      </div>
    </div>
        <div className="max-w-2xl w-full mb-10 px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{fontSize: "25px", fontFamily: "Lato"}}>FAQs</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:border-2 font-bold transition duration-200" style={{fontSize: "18px", fontFamily: "Lato"}}>How do I log my blood sugar readings?</AccordionTrigger>
              <AccordionContent style={{fontSize: "16px", fontFamily: "Lato"}}>
                Simply open the app, tap "Log", and enter your current blood sugar level.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:border-2 font-bold transition duration-200" style={{fontSize: "18px", fontFamily: "Lato"}}>Can I export my data?</AccordionTrigger>
              <AccordionContent style={{fontSize: "16px", fontFamily: "Lato"}}>
                Yes! You can export your data from the settings page as a CSV file.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </Container>
  );
}
