/**
 * ?
 * ??? PROBLEM ??? width: 100% --> Will add extra width because it doesn't account for the scroll bar.
 *
 * !!! SOLUTION !!!
 * ! width: 100vw && max-width: 100% && height: 100vh--> Forces the element to stop before hitting the scroll bar.
 *
 * !!! EXPLAINATION !!!
 * ! "The viewport-percentage lengths are relative to the size of the initial containing block. When the height or width of the initial containing block is changed, they are scaled accordingly. However, when the value of overflow on the root element is auto, any scroll bars are assumed not to exist. Note that the initial containing block’s size is affected by the presence of scrollbars on the viewport."
 * ! overflow: auto --> this is the cause of the issue.
 */
