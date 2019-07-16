class Event {
  constructor(id,image, normalText1, normalText2, specialSpan1, specialSpan2, dayFromStatus) {
      this.id = id;
      this.image = image;
      this.normalText1 = normalText1;
      this.normalText2 = normalText2; 
      this.specialSpan1 = specialSpan1; 
      this.specialSpan2 = specialSpan2; 
      this.dayFromStatus = dayFromStatus;
  }
}

export default Event;
