import { Shield, Heart, ExternalLink } from "lucide-react";
const Footer = () => {
  const quickLinks = [{
    label: "Emergency Kit Checklist",
    href: "#kit"
  }, {
    label: "Campus Safety Plan",
    href: "#campus-plan"
  }, {
    label: "Disaster Types",
    href: "#disasters"
  }, {
    label: "Safety Game",
    href: "#game"
  }];
  const emergencyNumbers = [{
    label: "Universal Emergency",
    number: "112"
  }, {
    label: "Fire Emergency",
    number: "101"
  }, {
    label: "Police",
    number: "100"
  }, {
    label: "Medical Emergency",
    number: "102"
  }];
  return <footer className="bg-neutral-900 text-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neutral-100 rounded-full" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-neutral-100 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-neutral-100 rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-500 text-sm">© 2025 StaySafe Guide. All Rights Reserved.</div>
            <div className="text-neutral-500 text-sm text-center md:text-right">
              A project for enhancing safety awareness in educational institutions.
              <br />
              <span className="text-primary">Be prepared. Stay safe. Help others.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;