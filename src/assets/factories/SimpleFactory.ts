import { FactoryProps } from '@/types/factory-types';

class SimpleFactory {
  constructor(props: FactoryProps) {
    // Get variables from props
    this.bindEvents = props.bindEvents;
    this.startup = props.startup
      ? props.startup
      : () => {
          console.log(
            `Starting a factory ${props.factoryName ? props.factoryName : ''}`,
          );
        };

    // Log factory creation
    if (props.factoryName) {
      console.log(`Factory [${props.factoryName}] initialized`);
    }

    // Bind events
    this.bindEvents();
  }

  bindEvents() {}
  startup() {}
}

export default SimpleFactory;
