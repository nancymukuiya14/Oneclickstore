import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  infoDetails = [
    {
      id:1,
      infoName:"Open range oven",
      infoDetails:"Pan-fried masala paneer.",
      infoPrice:5000,
      infoImg:"https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      infoName:"Fine Dining Table",
      infoDetails:"hard,soft wooded and metal type",
      infoPrice:369,
      infoImg:"https://images.unsplash.com/photo-1498491751984-14acb85d7d90?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw4OTMxMTQyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      infoName:"Kitchen type products",
      infoDetails:"panner",
      infoPrice:149,
      infoImg:"https://images.unsplash.com/photo-1631020280895-8449d8e1baaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]}
