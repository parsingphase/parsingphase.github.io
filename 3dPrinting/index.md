---
description: 'Some notes on a year of owning a 3D printer'
title: '3D printing for the curious'
---
<style>body { color: #000 } .inner { min-width: 80% } a { color: #d5000d }</style>

When I bought my first 3D printer a little under a year ago, I did so without a lot of knowledge on the subject,
and remember wishing there was a source for a general intro to the subject, to give me some confidence in getting started.
This page intends to provide a bit of that - not a complete introduction, but some reflections on my experience, and 
some pointers to useful resources.

To give a bit of context, the machine I bought was an "Original Prusa i3 MK3S+", usually shortened to "MK3S+". 
Given the choice of buying it assembled, or as a kit, I decided that I wanted the hobby to focus on *using* the printer,
not building it, and bought the assembled version. This meant an outlay of $999 instead of $749, which isn't a trivial 
amount either way, but I figured the higher price for something guaranteed to work, and to be used, was the better bet.

To be clear, there are cheaper printers out there. As I understand it you can get a "decent" printer in the $300-500 range
and a "usable" one for less. 

I picked Prusa because:

 - It's a long-established brand, with a strong history of delivery
 - Their machines have been consistently well-received across the years
 - They have (apparently, I've never used it) good customer support, as well as a strong online community
 - They have a lot of documentation and guidance online
 - They expect you to modify and repair your printer, and doing so doesn't mean a loss of support
 - They promise long-term support and spares for their printers

A year later, all of the above assumptions have proven to be robust. The one downside I've discovered (and it's not *that*
significant), is that, because Prusa is a Czech company, a lot of parts (and sometimes, the printers and larger accessories)
tend to have to be shipped from the Czech Republic, which means shipping costs are high - although shipping can be 
surprisingly fast. It's also worth noting that, outside the EU (eg, here in the USA), larger purchases will attract import 
duty.

Prusa do *have* an official US reseller - [Printed Solid](https://www.printedsolid.com/), which is where I bought my 
original printer, but Prusa are *not* good at keeping them supplied with stock, which means going back to the EU source
for a lot of parts.

Before I go much further, the key questions:

**Does it work?**, and **is it hard to use?**

Yes, it works - really impressively well. It's not particularly hard to use in terms of basic usage, but that can vary
as you challenge it and yourself with advanced materials or models. However, it's pretty fair to say that it "works out
of the box". 

It is worth being aware that the MK3S+ is an older model - to the extent of being [recently discontinued](https://blog.prusa3d.com/goodbye-mk3-the-end-of-an-era-is-close-or-is-it_93213/) in favor of the MK4. If you want this model, you'll need to
head to [Prusa](https://www.prusa3d.com/) or Printed Solid before remaining stock runs out.

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
 - Know the dimension of filament your printer uses, and check it on each purchase

It's worth being aware of what you'll need in terms of a workspace. Ideally, you'll want to have it on a decent-sized, 
robust table, in a place where it's out of your way and the noise won't be an issue (they're generally not *that* loud,
but they're not work / family friendly). Filament *can* outgas a little, and there can be varying degrees of odor, so 
you won't want it in a bedroom or dining area while it's in use. Another thing to be aware of is that prints can often 
take hours (even the smallest model will be 30-minutes to a couple hours), depending on the printer, and you may be 
running a print for 10-24 hours if you want to use your printer's full-size capability.

As to what you can print (initially, you'll be printing single-color prints), there are plenty of prepared models online
on several major sites. There are various file formats involved in printing, and you'll ultimately need a "GCODE" file
prepared for your model of printer - but you can generate these from other formats. If you have a Prusa, the 
[Printables](https://www.printables.com/) site is the most likely to have prepared files for your printer.

If you can get the prepared file, it's just a case of loading the file to the printer (methods vary by printer) and 
running it. Otherwise, you're likely to find a file format that requires some preparation, usually called "slicing", to 
create a file usable by your printer. 

This is because a GCODE file is highly specific. It's the complete list of moves the print head needs to make, and how 
it needs to extrude filament (speed and temperature), as it moves backwards and forwards to deposit plastic. These 
instructions depend on the capabilities of each printer model.

The more general files aren't specific to a printer, or even to printers in general. They define the shape of the object
you want to produce, and you use a program known as a "slicer" to determine the list of moves that can make this shape
on your printer. It's a fairly automated process, and as with many things in 3D printing, the defaults usually work out 
fine.

The shape files you're likely to find are generally STL, STEP or 3MF files:

 - **STL** files are one of the most common, basic interoperable files. Sources disagree on what it stands for, but essentially an STL file describes a single, solid shape. It defines what you want to print, but not how. Almost everything you might download is available in this format.