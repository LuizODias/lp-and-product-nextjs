export interface Flags {
  report_tab?: Flag;
  detailed_report?: Flag;
  config_tab?: Flag;
  mytests_tab?: Flag;
  products_tab?: Flag;  
}

interface Flag {
  defaultValue: boolean;
}
