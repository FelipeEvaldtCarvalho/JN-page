export const whatsappNumber = "5551984561140";

export const whatsappUrl = (text) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const reportConversion = () => {
  window.gtag?.("event", "conversion", {
    send_to: "AW-10880976344/iM3ZCJLrkrEDENiLusQo",
  });
};
