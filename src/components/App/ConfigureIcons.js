import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {
  faBars,
  faEnvelopeSquare,
  faPhoneSquare,
  faMapMarker,
  faCar,
  faMapMarkedAlt,
  faTint,
  faToiletPaper,
  faGlassCheers,
  faShoePrints,
  faUtensils,
  faMotorcycle,
  faGem,
  faAmbulance,
  faSun,
  faTshirt,
  faQuoteRight,
  faQuoteLeft,
  faMinus,
  faPlus,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function ConfigureIcons() {
  library.add(
    fab,
    fas,
    faBars,
    faEnvelopeSquare,
    faPhoneSquare,
    faMapMarker,
    faCar,
    faMapMarkedAlt,
    faTint,
    faToiletPaper,
    faGlassCheers,
    faShoePrints,
    faUtensils,
    faMotorcycle,
    faGem,
    faAmbulance,
    faSun,
    faTshirt,
    faQuoteRight,
    faQuoteLeft,
    faMinus,
    faPlus,
    faChevronDown,
    faChevronUp,
    faFacebook,
    faYoutube
  );
}
