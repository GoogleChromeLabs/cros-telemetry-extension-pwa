/**
 * @fileoverview Defines interfaces and data for items to be displayed
 * in the side-nav component.
 */

export interface NavigationItem {
  name: string;
  link: string;
}

export const TELEMETRY_NAV_DATA: NavigationItem = {
  name: 'Telemetry',
  link: '/support-assist/telemetry',
};

export const DIAGNOSTICS_NAV_DATA: NavigationItem = {
  name: 'Diagnostics',
  link: '/support-assist/diagnostics',
};

export const EVENTS_NAV_DATA: NavigationItem = {
  name: 'Events',
  link: '/support-assist/events',
};

export const ROUTINE_V2_NAV_DATA: NavigationItem = {
  name: 'Routine V2',
  link: '/support-assist/routine-v2',
};
