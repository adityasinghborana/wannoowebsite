export interface Events {
  id?: number;
  isVisible?: boolean;
  isVisibleHome?: boolean;
  cityId?: number;
  eventName?: string;
  duration?: string;
  imagePath?: string;
  eventType?: string;
  isSlot?: boolean;
  onlyChild?: boolean;
  vendorUid?: string;
  recommended?: boolean;
  eventdetailid?: null;
  eventdetail?: Eventdetail[];
}

export interface Eventdetail {
  id?: number;
  eventName?: string;
  eventdetailid?: number;
  description?: string;
  date?: Date;
  location?: string;
  googlemapurl?: string;
  minage?: string;
  moreinfo?: string;
  ticketinfo?: string;
  artistname?: string;
  artistimage?: string;
  lastbookingtime?: Date;
  eventSelling?: boolean;
  ischildallowed?: boolean;
  isadultallowed?: boolean;
  isinfantallowed?: boolean;
  duration?: string;
  vendorUid?: string;
}
