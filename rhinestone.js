#!/usr/bin/env js

"use strict";

var Panopolis = {

  zosimos: {
      j2: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
      j3: "HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
      j5: "PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
      j6: "HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
      k1: "____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ",
      k2: "NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
      k5: "UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
      k6: "HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
      n0: "HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb ",
     j17: "____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
     j23: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
     j25: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",
     j26: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
     j36: "HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
     j56: "UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb ",
     k12: "____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
     k15: "____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
     k25: "NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
     k26: "HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu ",
     k34: "PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
     k56: "HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
    j236: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
    j256: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
    j2k5: "FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
    j2k6: "HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
    j2y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
    j3k5: "NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
    j3k6: "HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
    j5y6: "PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
    k125: "____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
    k1j5: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
    k1j6: "____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
    k256: "HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
    k2j5: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
    k2j6: "HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
    k2x1: "____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
    k6x5: "HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
    n167: "NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
    n345: "____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
    n5y2: "HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
    n6x2: "FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
   j17k2: "____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
   j17y2: "HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
   j23k6: "HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
   j25y6: "TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
   j26y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
   j2k34: "TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
   j2k56: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
   j34k6: "HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
   j56y7: "UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
   k12j5: "____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
   k17j5: "TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
   k25x1: "____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
   k26x5: "HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   k2j56: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
   k34x2: "PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
   k56x4: "HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
   n25x6: "TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
   n26y5: "____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
   n45y2: "HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
   n67x2: "____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
  j136y7: "____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  j167y2: "HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
  j246y3: "HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
  j26y34: "HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
  j2k6x5: "HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
  j2k6y3: "HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  j346y5: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
  j3k5x4: "HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
  k135x4: "____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
  k157x6: "HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
  k1j6y7: "____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
  k257x1: "NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k25x17: "____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  k2j5x1: "____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  k2j5y6: "NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
  k345x2: "UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
  n167x4: "HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  n345y7: "____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 j2k56x4: "HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
 j3k56x4: "HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
 k1j56y7: "____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
 k2j56y7: "NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ "},

  daoling: {
      j2: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
      j3: "汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 一一 铁铀 ",
      j5: "铅铜 一一 金锡 一一 银汞 钒铁 铁钒 一一 一一 锡金 一一 铜铅 ",
      j6: "汞金 一一 锡铅 一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
      k1: "一一 铁铀 汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 ",
      k2: "镎铜 一一 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
      k5: "铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
      k6: "汞银 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 一一 钒铁 铁钒 ",
      n0: "汞铜 一一 锡锡 一一 铜汞 铅铁 一一 金银 一一 银金 一一 铁铅 ",
     j17: "一一 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
     j23: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
     j25: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 ",
     j26: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
     j36: "汞金 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
     j56: "铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 一一 一一 锡铅 ",
     k12: "一一 银铀 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
     k15: "一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
     k25: "镎铜 一一 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
     k26: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 一一 一一 钒铅 铁铜 ",
     k34: "铅铜 一一 金锡 一一 一一 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
     k56: "汞金 一一 锡铅 一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 ",
    j236: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    j256: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 一一 一一 钒铅 ",
    j2k5: "铁铜 汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 ",
    j2k6: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
    j2y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
    j3k5: "镎铜 一一 钒锡 铁钚 一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    j3k6: "汞钒 一一 锡镎 铀金 一一 铅铅 一一 金铀 一一 一一 钒汞 铁铁 ",
    j5y6: "铅铜 一一 金锡 一一 银汞 钒铁 铁钒 汞银 一一 一一 一一 铜铅 ",
    k125: "一一 银铀 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    k1j5: "一一 金铀 镎锡 一一 钒汞 铁铁 汞钒 一一 一一 铀金 一一 铅铅 ",
    k1j6: "一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    k256: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 铁铜 ",
    k2j5: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
    k2j6: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 铁铜 ",
    k2x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
    k6x5: "汞银 一一 锡金 一一 铜铅 铅铜 一一 一一 一一 银汞 钒铁 铁钒 ",
    n167: "镎铜 一一 一一 铁钚 一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 ",
    n345: "一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 钒锡 铁钚 ",
    n5y2: "汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 铁铜 ",
    n6x2: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 ",
   j17k2: "一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 钒铜 铁锰 ",
   j17y2: "汞银 一一 一一 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
   j23k6: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
   j25y6: "钒铜 铁锰 一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   j26y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
   j2k34: "钒铜 铁锰 一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 ",
   j2k56: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 镎铜 一一 钒锡 铁钚 ",
   j34k6: "汞锡 一一 锡汞 锰铁 铜钒 一一 一一 金金 一一 一一 钒铜 铁锰 ",
   j56y7: "铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 一一 ",
   k12j5: "一一 银铀 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
   k17j5: "钒铜 铁锰 汞锡 一一 锡汞 锰铁 铜钒 一一 一一 金金 一一 一一 ",
   k25x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
   k26x5: "汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   k2j56: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 ",
   k34x2: "铅铜 一一 一一 一一 银汞 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
   k56x4: "汞金 一一 锡铅 一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 ",
   n25x6: "钒铜 铁锰 汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   n26y5: "一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   n45y2: "汞钒 一一 一一 铀金 一一 铅铅 一一 金铀 镎锡 一一 钒汞 铁铁 ",
   n67x2: "一一 金铀 一一 一一 钒汞 铁铁 汞钒 一一 锡镎 铀金 一一 铅铅 ",
  j136y7: "一一 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  j167y2: "汞金 一一 一一 一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 ",
  j246y3: "汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j26y34: "汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j2k6x5: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 一一 银铀 钒锡 铁钚 ",
  j2k6y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
  j346y5: "镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 ",
  j3k5x4: "汞金 一一 锡铅 铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 ",
  k135x4: "一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
  k157x6: "汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 镎铜 一一 一一 铁钚 ",
  k1j6y7: "一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 一一 ",
  k257x1: "镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k25x17: "一一 银铀 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k2j5x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
  k2j5y6: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 ",
  k345x2: "铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 锡铅 ",
  n167x4: "汞金 一一 一一 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  n345y7: "一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
 j2k56x4: "汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 镎铜 一一 钒锡 铁钚 ",
 j3k56x4: "汞钒 一一 锡镎 铀金 一一 一一 一一 金铀 镎锡 一一 钒汞 铁铁 ",
 k1j56y7: "一一 金铀 镎锡 一一 钒汞 铁铁 汞钒 一一 锡镎 铀金 一一 一一 ",
 k2j56y7: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 "},

  amalgam: {
      j2: [153, 228,   0,   0,  92, 168,   0, 138,   0, 107,   0,  78],
      j3: [151,   0, 121, 180,   0, 166,   0, 136,   0, 106,   0,  75],
      j5: [165,   0, 135,   0, 105,  36,  66,   0,   0, 120,   0,  90],
      j6: [152,   0, 122,   0,  91, 167,   0, 137, 196,   0,   0,  76],
      k1: [  0,  75, 151,   0, 121, 180,   0, 166,   0, 136,   0, 106],
      k2: [197,   0,   0,  78, 153, 228,   0, 182,   0, 168,   0, 138],
      k5: [181,   0, 167,   0, 137, 196,   0,   0,  76, 152,   0, 122],
      k6: [150,   0, 120,   0,  90, 165,   0, 135,   0,   0,  36,  66],
      n0: [149,   0, 119,   0,  89, 164,   0, 134,   0, 104,   0,  74],
     j17: [  0,   0, 120,   0,  90, 165,   0, 135,   0, 105,  36,  66],
     j23: [153, 228,   0, 182,   0, 168,   0, 138,   0, 107,   0,  78],
     j25: [ 69, 147,   0,   0,  57,  84, 162,   0,   0, 200,   0,  42],
     j26: [153, 228,   0,   0,  92, 168,   0, 138, 197,   0,   0,  78],
     j36: [152,   0, 122, 181,   0, 167,   0, 137, 196,   0,   0,  76],
     j56: [181,   0, 167,   0, 137, 196,  98,   0,  76,   0,   0, 122],
     k12: [  0, 107,   0,  78, 153, 228,   0, 182,   0, 168,   0, 138],
     k15: [  0,  91, 167,   0, 137, 196,   0,   0,  76, 152,   0, 122],
     k25: [197,   0,   0,  78, 153, 228,   0,   0,  92, 168,   0, 138],
     k26: [147,   0,   0,  57,  84, 162,   0, 140,   0,   0,  42,  69],
     k34: [165,   0, 135,   0,   0,  36,  66, 150,   0, 120,   0,  90],
     k56: [152,   0, 122,   0,  91, 167,   0,   0, 196,   0,  38,  76],
    j236: [153, 228,   0, 182,   0, 168,   0, 138, 197,   0,   0,  78],
    j256: [ 69, 147,   0,   0,  57,  84, 162,   0, 140,   0,   0,  42],
    j2k5: [ 69, 147,   0,   0,  57,  84,   0,   0, 140, 200,   0,  42],
    j2k6: [153, 228,   0,   0,  92, 168,   0, 138,   0,   0,  39,  78],
    j2y3: [153, 228, 114,   0,   0, 168,   0, 138,   0, 107,   0,  78],
    j3k5: [197,   0,  39,  78,   0, 228,   0,   0,  92, 168,   0, 138],
    j3k6: [146,   0, 124, 184,   0, 170,   0, 139,   0,   0,  41,  68],
    j5y6: [165,   0, 135,   0, 105,  36,  66, 150,   0,   0,   0,  90],
    k125: [  0, 107,   0,  78, 153, 228,   0,   0,  92, 168,   0, 138],
    k1j5: [  0, 139, 199,   0,  41,  68, 146,   0,   0, 184,   0, 170],
    k1j6: [  0, 228, 114,   0,  92, 168,   0, 138, 197,   0,   0,  78],
    k256: [147,   0,   0,  57,  84, 162,   0,   0, 200,   0,  42,  69],
    k2j5: [197,   0,   0,  78, 153, 228, 114,   0,   0, 168,   0, 138],
    k2j6: [147,   0,   0,  57,  84, 162,   0, 140, 200,   0,   0,  69],
    k2x1: [  0,   0,  39,  78, 153, 228,   0, 182,   0, 168,   0, 138],
    k6x5: [150,   0, 120,   0,  90, 165,   0,   0,   0, 105,  36,  66],
    n167: [197,   0,   0,  78,   0, 228, 114,   0,  92, 168,   0, 138],
    n345: [  0, 228,   0,   0,  92, 168,   0, 138, 197,   0,  39,  78],
    n5y2: [147,   0,   0,  57,  84,   0,   0, 140, 200,   0,  42,  69],
    n6x2: [ 69, 147,   0,   0,  57,  84, 162,   0, 140, 200,   0,   0],
   j17k2: [  0,   0,   0,  52,  82, 166,   0, 136,   0, 106,  37,  67],
   j17y2: [150,   0,   0,   0,  90, 165,   0, 135,   0, 105,  36,  66],
   j23k6: [153, 228,   0, 182,   0, 168,   0, 138,   0,   0,  39,  78],
   j25y6: [ 37,  67,   0,   0, 121,  52,  82, 166,   0,   0,   0, 106],
   j26y3: [153, 228, 114,   0,   0, 168,   0, 138, 197,   0,   0,  78],
   j2k34: [ 37,  67,   0,   0,   0,  52,  82, 166,   0, 136,   0, 106],
   j2k56: [153, 228,   0,   0,  92, 168,   0,   0, 197,   0,  39,  78],
   j34k6: [151,   0, 121,  52,  82,   0,   0, 136,   0,   0,  37,  67],
   j56y7: [181,   0, 167,   0, 137, 196,  98,   0,  76, 152,   0,   0],
   k12j5: [  0, 107,   0,  78, 153, 228, 114,   0,   0, 168,   0, 138],
   k17j5: [ 37,  67, 151,   0, 121,  52,  82,   0,   0, 136,   0,   0],
   k25x1: [  0,   0,  39,  78, 153, 228,   0,   0,  92, 168,   0, 138],
   k26x5: [151,   0,   0,  52,  82, 166,   0,   0,   0, 106,  37,  67],
   k2j56: [197,   0,   0,  78, 153, 228, 114,   0,  92,   0,   0, 138],
   k34x2: [165,   0,   0,   0, 105,  36,  66, 150,   0, 120,   0,  90],
   k56x4: [152,   0, 122,   0,  91,   0,   0, 137, 196,   0,  38,  76],
   n25x6: [ 37,  67, 151,   0,   0,  52,  82, 166,   0,   0,   0, 106],
   n26y5: [  0,   0, 121,  52,  82, 166,   0,   0,   0, 106,  37,  67],
   n45y2: [146,   0,   0, 184,   0, 170,   0, 139, 199,   0,  41,  68],
   n67x2: [  0, 139,   0,   0,  41,  68, 146,   0, 124, 184,   0, 170],
  j136y7: [  0,   0, 122, 181,   0, 167,   0, 137, 196,  98,   0,  76],
  j167y2: [152,   0,   0,   0,  91, 167,   0, 137, 196,   0,  38,  76],
  j246y3: [153, 228, 114,   0,  92,   0,   0, 138, 197,   0,   0,  78],
  j26y34: [153, 228, 114, 182,   0,   0,   0, 138, 197,   0,   0,  78],
  j2k6x5: [153, 228,   0,   0,  92, 168,   0,   0,   0, 107,  39,  78],
  j2k6y3: [153, 228, 114,   0,   0, 168,   0, 138,   0,   0,  39,  78],
  j346y5: [197,   0,  39,  78, 153, 228,   0,   0,  92,   0,   0, 138],
  j3k5x4: [152,   0, 122, 181,   0,   0,   0, 137, 196,  98,   0,  76],
  k135x4: [  0,  91, 167,   0,   0, 196,   0,  38,  76, 152,   0, 122],
  k157x6: [153, 228, 114,   0,  92, 168,   0,   0, 197,   0,   0,  78],
  k1j6y7: [  0,  91, 167,   0, 137, 196,   0,  38,  76, 152,   0,   0],
  k257x1: [197,   0,  39,  78, 153, 228,   0,   0,  92, 168,   0,   0],
  k25x17: [  0, 107,  39,  78, 153, 228,   0,   0,  92, 168,   0,   0],
  k2j5x1: [  0,   0,  39,  78, 153, 228, 114,   0,   0, 168,   0, 138],
  k2j5y6: [197,   0,   0,  78, 153, 228, 114, 182,   0,   0,   0, 138],
  k345x2: [181,   0,   0,   0, 137, 196,  98,   0,  76, 152,   0, 122],
  n167x4: [152,   0,   0, 181,   0, 167,   0, 137, 196,  98,   0,  76],
  n345y7: [  0,  91,   0,   0, 137, 196,   0,  38,  76, 152,   0, 122],
 j2k56x4: [153, 228,   0,   0,  92,   0,   0, 138, 197,   0,  39,  78],
 j3k56x4: [146,   0, 124, 184,   0,   0,   0, 139, 199,   0,  41,  68],
 k1j56y7: [  0, 139, 199,   0,  41,  68, 146,   0, 124, 184,   0,   0],
 k2j56y7: [197,   0,   0,  78, 153, 228, 114,   0,  92, 168,   0,   0]}

};

Panopolis.latin = {
  gj: function(qp) {return(qp.slice(30,60).concat(qp.slice(0,30)))},
  dj: function(qp) {return(qp.slice( 5,60).concat(qp.slice(0, 5)))},
  aj: function(qp) {return(qp.slice(40,60).concat(qp.slice(0,40)))},
  ej: function(qp) {return(qp.slice(15,60).concat(qp.slice(0,15)))},
  bj: function(qp) {return(qp.slice(50,60).concat(qp.slice(0,50)))},
  fn: function(qp) {return(qp.slice(25,60).concat(qp.slice(0,25)))},
  cn: function(qp) {return(qp.slice( 0,60).concat(qp.slice(0, 0)))},
  gn: function(qp) {return(qp.slice(35,60).concat(qp.slice(0,35)))},
  dn: function(qp) {return(qp.slice(10,60).concat(qp.slice(0,10)))},
  an: function(qp) {return(qp.slice(45,60).concat(qp.slice(0,45)))},
  en: function(qp) {return(qp.slice(20,60).concat(qp.slice(0,20)))},
  bn: function(qp) {return(qp.slice(55,60).concat(qp.slice(0,55)))},
  fk: function(qp) {return(qp.slice(30,60).concat(qp.slice(0,30)))},
  ck: function(qp) {return(qp.slice( 5,60).concat(qp.slice(0, 5)))},
  gk: function(qp) {return(qp.slice(40,60).concat(qp.slice(0,40)))},
  dk: function(qp) {return(qp.slice(15,60).concat(qp.slice(0,15)))},
  ak: function(qp) {return(qp.slice(50,60).concat(qp.slice(0,50)))}
};

Panopolis.hanzi = {
  gj: function(qp) {return(qp.slice(18,36).concat(qp.slice(0,18)))},
  dj: function(qp) {return(qp.slice( 3,36).concat(qp.slice(0, 3)))},
  aj: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  ej: function(qp) {return(qp.slice( 9,36).concat(qp.slice(0, 9)))},
  bj: function(qp) {return(qp.slice(30,36).concat(qp.slice(0,30)))},
  fn: function(qp) {return(qp.slice(15,36).concat(qp.slice(0,15)))},
  cn: function(qp) {return(qp.slice( 0,36).concat(qp.slice(0, 0)))},
  gn: function(qp) {return(qp.slice(21,36).concat(qp.slice(0,21)))},
  dn: function(qp) {return(qp.slice( 6,36).concat(qp.slice(0, 6)))},
  an: function(qp) {return(qp.slice(27,36).concat(qp.slice(0,27)))},
  en: function(qp) {return(qp.slice(12,36).concat(qp.slice(0,12)))},
  bn: function(qp) {return(qp.slice(33,36).concat(qp.slice(0,33)))},
  fk: function(qp) {return(qp.slice(18,36).concat(qp.slice(0,18)))},
  ck: function(qp) {return(qp.slice( 3,36).concat(qp.slice(0, 3)))},
  gk: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  dk: function(qp) {return(qp.slice( 9,36).concat(qp.slice(0, 9)))},
  ak: function(qp) {return(qp.slice(30,36).concat(qp.slice(0,30)))}
};

Panopolis.nystrom = function(fortecken) {
  let datarr = this.amalgam[fortecken];
  let tmparr = [];
    for (var i = 0; i < datarr.length; i++) {
      tmparr.push(datarr[i].toString(16));
    }
  let novast = tmparr.join(" ").toUpperCase() + " ";
  let result = novast.replace(/0/g, "__");
  return result;
};

Panopolis.stringTuner = function(sym, qp) {
  print('\t' + this[sym].fn(qp));
  print('\t' + this[sym].cn(qp));
  print('\t' + this[sym].gn(qp));
  print('\t' + this[sym].dn(qp));
  print('\t' + this[sym].an(qp));
  print('\t' + this[sym].en(qp));
  print('\t' + this[sym].bn(qp));
  print('\t' + this[sym].fk(qp));
  print('\t' + this[sym].ck(qp));
  print('\t' + this[sym].gk(qp));
  print('\t' + this[sym].dk(qp));
  print('\t' + this[sym].ak(qp));
};

Panopolis.chronoMetric = function() {
  let nwdt = new Date();
  return nwdt.getTime();
};

Panopolis.serialStamp = String(Panopolis.chronoMetric());

print();

for (let i in Panopolis.zosimos) {
  print('\n\t' + i + '-sv' + Panopolis.serialStamp);
  Panopolis.stringTuner("latin", Panopolis.zosimos[i]);
  print();

  print('\n\t' + i + '-zh' + Panopolis.serialStamp);
  Panopolis.stringTuner("hanzi", Panopolis.daoling[i]);
  print();

  print('\n\t' + i + '-hx' + Panopolis.serialStamp);
  Panopolis.stringTuner("hanzi", Panopolis.nystrom(i));
  print();
}

print();

