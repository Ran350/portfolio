export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

// PV 測定
export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

//developers.google.com/analytics/devguides/collection/gtagjs/events
https: type GaEventProps = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({
  action,
  category,
  label,
  value,
}: GaEventProps): void => {
  if (!GA_TRACKING_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
