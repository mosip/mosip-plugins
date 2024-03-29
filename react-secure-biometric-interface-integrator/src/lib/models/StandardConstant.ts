/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IDeviceState } from "./StandardInterface";
import { DeviceStateStatusType } from "./StandardType";

const DeviceStateStatus: { [name: string]: DeviceStateStatusType } = {
  Ready: "READY",
  "Not Ready": "NOTREADY",
  Busy: "BUSY",
  "Not Registered": "NOTREGISTERED",
};

const DeviceState: { [name in DeviceStateStatusType]: IDeviceState } = {
  READY: {
    value: "READY",
    name: "Ready",
    class: "ready",
    symbol: "\u25CF",
  },
  NOTREADY: {
    value: "NOTREADY",
    name: "Not Ready",
    class: "not-ready",
    symbol: "\u25CF",
  },
  BUSY: {
    value: "BUSY",
    name: "Busy",
    class: "busy",
    symbol: "\u25CF",
  },
  NOTREGISTERED: {
    value: "NOTREGISTERED",
    name: "Not Registered",
    class: "not-registered",
    symbol: "\u25CE",
  },
};

const LoadingStates = {
  DISCOVERING: "DISCOVERING",
  LOADED: "LOADED",
  ERROR: "ERROR",
  AUTHENTICATING: "AUTHENTICATING",
};

const host = "http://127.0.0.1";
const errorRibbonClass =
  "mdb-p-2 mdb-mt-1 mdb-mb-1 mdb-w-full mdb-text-center mdb-text-sm mdb-rounded-lg mdb-text-red-700 mdb-bg-red-100 ";

const loadingContClass =
  "mdb-bottom-0 mdb-left-0 mdb-bg-white mdb-bg-opacity-70 mdb-py-4 mdb-h-full mdb-w-full mdb-flex mdb-justify-center mdb-font-semibold";

const verifyButtonClass =
  "mdb-cursor-pointer mdb-block mdb-w-full mdb-font-medium mdb-rounded-lg mdb-text-sm mdb-px-5 mdb-py-2 mdb-text-center mdb-border mdb-border-2 ";

const scanButtonClass =
  "mdb-cursor-pointer mdb-flex mdb-items-center mdb-ml-auto mdb-text-gray-900 mdb-bg-white mdb-shadow border mdb-border-gray-300 mdb-hover:bg-gray-100 mdb-font-medium mdb-rounded-lg mdb-text-lg mdb-px-3 mdb-py-1 mdb-ml-1";

const cancelButtonClass =
  "mdb-cursor-pointer mdb-block mdb-w-full mdb-font-medium mdb-rounded-lg mdb-text-sm mdb-px-5 mdb-py-2 mdb-text-center mdb-border-2 mdb-border-gray mdb-bg-white mdb-hover:bg-gray-100 mdb-text-gray-900";

enum SelectBoxColor {
  PANEL_ACTIVE = "#2684ff",
  PANEL_HOVER = "#deebff",
  PANEL_DISABLED = "lightgray",
  PANEL_NORMAL = "#fff",
  BOX_BORDER_ACTIVE = "#2684ff",
  BOX_BORDER_HOVER = "#b3b3b3",
  BOX_BORDER_NORMAL = "#cccccc",
}

export {
  host,
  DeviceState,
  DeviceStateStatus,
  LoadingStates,
  errorRibbonClass,
  loadingContClass,
  verifyButtonClass,
  scanButtonClass,
  cancelButtonClass,
  SelectBoxColor,
};
