export type FactoryProps = {
  factoryName?: string;
  bindEvents: () => void;
  startup?: () => void;
};
