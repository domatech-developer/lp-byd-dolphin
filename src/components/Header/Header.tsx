"use client";

import { FC, useRef, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import InfoModal from "@/components/InfoModal/InfoModal";
import { phonesModalContent } from "@/components/InfoModal/phonesModalContent";
import { locationsModalContent } from "@/components/InfoModal/locationsModalContent";

const CLOSE_DELAY = 150;

const Header: FC = () => {
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [phonesAnchor, setPhonesAnchor] = useState<HTMLElement | null>(null);
  const [locationAnchor, setLocationAnchor] = useState<HTMLElement | null>(null);
  const phonesCloseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const locationCloseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openPhones = (anchor: HTMLElement | null) => {
    clearTimeout(phonesCloseTimer.current);
    setPhonesAnchor(anchor);
    setPhonesOpen(true);
  };

  const scheduleClosePhones = () => {
    phonesCloseTimer.current = setTimeout(() => setPhonesOpen(false), CLOSE_DELAY);
  };

  const cancelClosePhones = () => clearTimeout(phonesCloseTimer.current);

  const openLocation = (anchor: HTMLElement | null) => {
    clearTimeout(locationCloseTimer.current);
    setLocationAnchor(anchor);
    setLocationOpen(true);
  };

  const scheduleCloseLocation = () => {
    locationCloseTimer.current = setTimeout(() => setLocationOpen(false), CLOSE_DELAY);
  };

  const cancelCloseLocation = () => clearTimeout(locationCloseTimer.current);

  return (
    <>
      <HeaderDesktop
        onOpenPhones={openPhones}
        onClosePhones={scheduleClosePhones}
        onOpenLocation={openLocation}
        onCloseLocation={scheduleCloseLocation}
      />
      <HeaderMobile onOpenPhones={openPhones} onOpenLocation={openLocation} />

      <InfoModal
        open={phonesOpen}
        data={phonesModalContent}
        onClose={() => setPhonesOpen(false)}
        anchorEl={phonesAnchor}
        onMouseEnter={cancelClosePhones}
        onMouseLeave={scheduleClosePhones}
      />
      <InfoModal
        open={locationOpen}
        data={locationsModalContent}
        onClose={() => setLocationOpen(false)}
        anchorEl={locationAnchor}
        onMouseEnter={cancelCloseLocation}
        onMouseLeave={scheduleCloseLocation}
      />
    </>
  );
};

export default Header;
