import SimpleFactory from '@/factories/SimpleFactory';

class HelloButtonFactory extends SimpleFactory {
  constructor() {
    super({
      factoryName: 'Hello button factory',
      bindEvents: () => {
        const buttons: NodeListOf<HTMLButtonElement> =
          document.querySelectorAll('button.wq-button-hello');

        buttons.forEach(
          (elem) =>
            (elem.onclick = () => {
              console.log('Clicked!');
            }),
        );
      },
    });
  }
}

export const helloButtonFactory = new HelloButtonFactory();
