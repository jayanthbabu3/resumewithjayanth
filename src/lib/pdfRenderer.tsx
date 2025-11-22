import React from "react";
import {
  Page as BasePage,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Svg,
  Path,
  Rect,
  Line,
  Polyline,
  Polygon,
  Circle,
  ClipPath,
  Stop,
  LinearGradient,
  RadialGradient,
  Link,
  Font,
  Note,
  Canvas,
  PDFDownloadLink,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import type { PageProps } from "@react-pdf/renderer";
import { getStandardPageStyle } from "./pdfConfig";

type PagePropsWithChildren = React.PropsWithChildren<PageProps>;

const Page = ({ style, children, ...rest }: PagePropsWithChildren) => {
  const mergedStyle = Array.isArray(style)
    ? [getStandardPageStyle(), ...style]
    : [getStandardPageStyle(), style];

  return (
    <BasePage {...rest} style={mergedStyle}>
      {children}
    </BasePage>
  );
};

export {
  Page,
  Document,
  View,
  Text,
  StyleSheet,
  Image,
  Svg,
  Path,
  Rect,
  Line,
  Polyline,
  Polygon,
  Circle,
  ClipPath,
  Stop,
  LinearGradient,
  RadialGradient,
  Link,
  Font,
  Note,
  Canvas,
  PDFDownloadLink,
  PDFViewer,
  pdf,
};
