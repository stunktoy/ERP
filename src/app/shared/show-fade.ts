import {style, animate, animation} from '@angular/animations';
  
export const ShowFade = animation([
  style({
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}', style({ opacity: '{{ animateOpacity }}' }))
]);