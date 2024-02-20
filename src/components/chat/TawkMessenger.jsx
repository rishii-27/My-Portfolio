import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";

const TawkMessenger = () => {
  const tawkMessengerRef = useRef();

  return (
    <div>
      <TawkMessengerReact
        propertyId="65d456098d261e1b5f629cd3"
        widgetId="1hn2n05hh"
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default TawkMessenger;
