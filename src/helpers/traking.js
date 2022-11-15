import { initialize, event } from "react-ga";

export const initGA = () => {
  initialize("UA-68607928-1");
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
  event({
    category: category,
    action: action,
    label: label,
  });
};
