---
description: 'Some notes on a year of owning a 3D printer'
title: '3D printing for the curious'
---

<style>body { color: #000 } .inner { min-width: 80% } a { color: #d5000d }</style>

When I bought my first 3D printer a little under a year ago, I did so without a lot of knowledge on the subject,
and remember wishing there was a source for a general intro to the subject, to give me some confidence in getting
started.
This page intends to provide a bit of that - not a complete introduction, but some reflections on my experience, and
some pointers to useful resources.

To give a bit of context, the machine I bought was an "Original Prusa i3 MK3S+", usually shortened to "MK3S+".
Given the choice of buying it assembled, or as a kit, I decided that I wanted the hobby to focus on *using* the printer,
not building it, and bought the assembled version. This meant an outlay of $999 instead of $749, which isn't a trivial
amount either way, but I figured the higher price for something guaranteed to work, and to be used, was the better bet.

To be clear, there are cheaper printers out there. As I understand it you can get a "decent" printer in the $300-500
range
and a "usable" one for less.

I picked [Prusa](https://www.prusa3d.com/) because:

 - It's a long-established brand, with a strong history of delivery
 - Their machines have been consistently well-received across the years
 - They have (apparently, I've never used it) good customer support, as well as a strong online community
 - They have a lot of documentation and guidance online
 - They expect you to modify and repair your printer, and doing so doesn't mean a loss of support
 - They promise long-term support and spares for their printers

A year later, all of the above assumptions have proven to be robust. The one downside I've discovered (and it's not
*that*
significant), is that, because Prusa is a Czech company, a lot of parts (and sometimes, the printers and larger
accessories)
tend to have to be shipped from the Czech Republic, which means shipping costs are high - although shipping can be
surprisingly fast. It's also worth noting that, outside the EU (eg, here in the USA), larger purchases will attract
import
duty.

Prusa do *have* an official US reseller - [Printed Solid](https://www.printedsolid.com/), which is where I bought my
original printer, but Prusa are *not* good at keeping them supplied with stock, which means going back to the EU source
for a lot of parts.

Before I go much further, the key questions:

**Does it work?**, and **is it hard to use?**

Yes, it works - really impressively well. It's not particularly hard to use in terms of basic usage, but that can vary
as you challenge it and yourself with advanced materials or models. However, it's pretty fair to say that it "works out
of the box".

It is worth being aware that the MK3S+ is an older model - to the extent of being [recently discontinued](https://blog.prusa3d.com/goodbye-mk3-the-end-of-an-era-is-close-or-is-it_93213/) in favor
of the Mini and MK4. If you want this model, you'll need to head to Prusa or Printed Solid before remaining stock runs 
out.

But this isn't a review of the MK3S+; it's intended to be a general intro to 3D printing and a reflection on owning a
printer and learning to use it.

So… what might you want to know?

Here's the "Elevator Pitch" on 3D printing:

There are two core material technologies in consumer 3D printing: Filament and Resin. Filament printing uses reels of
plastic, which are melted and deposited from a nozzle that moves in 3 dimensions; Resin printing uses a tank of
photosensitive resin which is solidified layer-by-layer by a variable light source. Filament (in storage) is inert
and harmless, resin is potentially messy and moderately hazardous. The resolution achievable with resin is generally
higher, so it's well suited to smaller, more detailed items. Filament's best resolution (it can be adjusted, at the cost
of speed) is lower, but the maximum build size, while depending on your specific printer, can be higher.
Filament printers can use a variety of plastic materials (the most common, easiest and cheapest is PLA) and filaments
from any manufacturer are generally compatible with any filament printer.

That's about all I know about resin - the MK3S+ is a filament printer, also known as FFF (Fused Filament Fabrication) or
FDM (Fused Deposition Modeling). So the rest of this piece will be relevant to that technology.

Given that a decent printer *will* just work off the shelf, the essential guidance is pretty minimal:

 - Get an assembled, reliable printer from a known brand
 - Stick to PLA until it won't do what you need
 - Know the dimension of filament your printer uses, and check it on each purchase. Note that filament size is constant
  for each printer, and doesn't affect print quality - it's the setup of the print job that decides that.

It's worth being aware of what you'll need in terms of a workspace. Ideally, you'll want to have it on a decent-sized,
robust table, in a place where it's out of your way and the noise won't be an issue (they're generally not *that* loud,
but they're not work / family friendly). Filament *can* outgas a little, and there can be varying degrees of odor, so
you won't want it in a bedroom or dining area while it's in use. Another thing to be aware of is that prints can often
take hours (even the smallest model will be 30-minutes to a couple hours), depending on the printer, and you may be
running a print for 10-24 hours if you want to use your printer's full-size capability.

As to what you can print (initially, you'll be printing single-color prints unless you've bought an out-of-the-box
multicolor printer), there are plenty of prepared models online
on several major sites. There are various file formats involved in printing, and you'll ultimately need a "GCODE" file
prepared for your model of printer - but you can generate these from other formats. If you have a Prusa, the
[Printables](https://www.printables.com/) site is the most likely to have prepared files for your printer.

If you can get the prepared file, it's just a case of loading the file to the printer (methods vary by printer) and
running it. Otherwise, you're likely to find a file format that requires some preparation, usually called "slicing", to
create a file usable by your printer.

This is because a GCODE file is highly specific. It's the complete list of moves the print head needs to make, and how
it needs to extrude filament (speed and temperature), as it moves backwards and forwards to deposit plastic. These
instructions depend on the capabilities of each printer model.

Various other files formats aren't specific to a printer, or even to printers in general. They define the shape of the
object you want to produce, and you use a program known as a "slicer" to determine the list of moves that can make this
shape on your printer. It's a fairly automated process, and as with many things in 3D printing, the defaults usually
work out fine.

The shape files you're likely to find are generally STL, STEP or 3MF files:

 - **STL** files are one of the most common, basic interoperable files. Sources disagree on what it stands for, but
  essentially an STL file describes a single, solid shape, generally as a triangular mesh. Almost everything you might
  download is available in this format.
 - **STEP** files similarly describe shapes, but with a slightly more advanced geometry (although you're unlikely to
  notice the difference from STL-sourced prints)
 - **3MF** files are more advanced - think of them as project files rather than single shapes. These can contain one or
  many shapes, but also color & settings data, eg materials and speeds to use, and possibly printer-specific settings.
  These are also the file you'll tend to save from your slicer (more below) to be able to return to and modify the
  settings you used last time. These files *might* be set up for a specific material or printer, but you can often
  change these in your slicer.

I've probably used the word "slicer" enough now that I should define it.

In brief, a slicer is the graphical software you use to create a printer-ready GCODE file from one or more shapes, or
from a project file. You load the shape file, turn it the right way up on the bed if needed, set things like materials
and quality levels (on typical models, you can leave everything else at default) and then tell it to slice and export.
Usually it'll give you a preview of the sliced object, and tell you how much time and material will be needed.

The one I use, because I have a Prusa printer, is [PrusaSlicer](https://www.prusa3d.com/en/page/prusaslicer_424/).
However, it works with other printers, and other slicers can also work with Prusa printers. PrusaSlicer is good, though,
and it doesn't hurt that it's free.

If you've read all the above, you're about ready to buy and print. If you want to make that leap, I'd just underscore
two points mentioned above:

1. Stick to PLA. Other materials are harder to use, may require more hardware, or will only work with certain print
   plates. If you use the wrong plate/material combination, if you're lucky the print just won't stay in place while
   printing, and if you're unlucky, it'll stick so well that you have to half-wreck your plate to chisel it off.
2. Again - check the diameter of the filament!

If you want to learn a bit more, that's also not a bad plan. There are some excellent resources on YouTube in
particular,
and a good starting point is the [3D Printing Nerd](https://www.youtube.com/@3DPrintingNerd)'s channel, run by Joel
Telling, who always comes across as the nicest guy in 3D printing. He covers reviews, interesting prints, and events.
Other creators worth following are [Thomas Sanlanderer](https://www.youtube.com/@MadeWithLayers),
[Stefan Hermann](https://www.youtube.com/@CNCKitchen) and [3DPrintBunny](https://www.youtube.com/@3dprintbunny).
For text-based content, check out [All3DP](https://all3dp.com/).

So far I've dealt with printing preexisting models. Chances are at some point, you might want to create your own. Any 3D
CAD program that outputs STEP or STL can be used, but I'll touch on a few of the more commonly used ones here:

**[Fusion 360](https://www.autodesk.eu/products/fusion-360/overview?term=1-YEAR&tab=subscription)**
is probably closest to what most people would consider as a classic CAD program, in that you create your
models by starting with, and building on, measured drawings. It's from Autodesk,
it's [free for personal use](https://www.autodesk.com/products/fusion-360/personal),
but it has a definite learning curve.
Fortunately, [Product Design Online](https://www.youtube.com/playlist?list=PLrZ2zKOtC_-C4rWfapgngoe9o2-ng8ZBr) on YouTube has an excellent tutorial series. The initial (and entirely
sufficient) course is free on YouTube, but good enough that I'd encourage contributing to his Patreon or also looking at
the advanced courses on their site.

**[Blender](https://www.blender.org/)** is a free but fully featured 3D modelling tool, capable of creating full-length
3D video animations. To
achieve this, it features a range of 3D drawing and [sculpting](https://www.blender.org/features/sculpting/) tools,
which can equally be used to create static models which can be exported for printing. I've not used this or any
sculpting tool, personally.

**[OpenSCAD](https://openscad.org/)** goes in entirely the opposite direction, being entirely code-driven. An OpenSCAD
design specifies basic geometries and their combination and development in text; the UI isn't interactive but is rather
a preview of what the text files define. If you're building basic geometries, or can hold more develop more complex ones
in your head, this actually works quite well. It, too, is free.

A very over-simplistic, but still helpful, way to understand this is that Fusion 360 might be seen as an engineer's tool,
Blender as an artist's tool, and OpenSCAD as a mathematician's.