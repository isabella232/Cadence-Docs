(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{493:function(t,e,s){"use strict";s.r(e);var n=s(13),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"distributed-cron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distributed-cron"}},[t._v("#")]),t._v(" Distributed CRON")]),t._v(" "),s("p",[t._v("It is relatively straightforward to turn any Cadence "),s("Term",{attrs:{term:"workflow"}}),t._v(" into a Cron "),s("Term",{attrs:{term:"workflow"}}),t._v(". All you need\nis to supply a cron schedule when starting the "),s("Term",{attrs:{term:"workflow"}}),t._v(" using the CronSchedule\nparameter of\n"),s("a",{attrs:{href:"https://godoc.org/go.uber.org/cadence/internal#StartWorkflowOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("StartWorkflowOptions"),s("OutboundLink")],1),t._v(".")],1),t._v(" "),s("p",[t._v("You can also start a "),s("Term",{attrs:{term:"workflow"}}),t._v(" using the Cadence "),s("Term",{attrs:{term:"CLI"}}),t._v(" with an optional cron schedule using the "),s("code",[t._v("--cron")]),t._v(" argument.")],1),t._v(" "),s("p",[t._v("For "),s("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" with CronSchedule:")],1),t._v(" "),s("ul",[s("li",[t._v('Cron schedule is based on UTC time. For example cron schedule "15 8 * * *"\nwill run daily at 8:15am UTC.')]),t._v(" "),s("li",[t._v("If a "),s("Term",{attrs:{term:"workflow"}}),t._v(" failed and a RetryPolicy is supplied to the StartWorkflowOptions\nas well, the "),s("Term",{attrs:{term:"workflow"}}),t._v(" will retry based on the RetryPolicy. While the "),s("Term",{attrs:{term:"workflow"}}),t._v(" is\nretrying, the server will not schedule the next cron run.")],1),t._v(" "),s("li",[t._v("Cadence server only schedules the next cron run after the current run is\ncompleted. If the next schedule is due while a "),s("Term",{attrs:{term:"workflow"}}),t._v(" is running (or retrying),\nthen it will skip that schedule.")],1),t._v(" "),s("li",[t._v("Cron "),s("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" will not stop until they are terminated or cancelled.")],1)]),t._v(" "),s("p",[t._v("Cadence supports the standard cron spec:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CronSchedule - Optional cron schedule for workflow. If a cron schedule is specified, the workflow will run")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as a cron based on the schedule. The scheduling will be based on UTC time. The schedule for next run only happen")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after the current run is completed/failed/timeout. If a RetryPolicy is also supplied, and the workflow failed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or timed out, the workflow will be retried based on the retry policy. While the workflow is retrying, it won't")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// schedule its next run. If next schedule is due while the workflow is running (or retrying), then it will skip that")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// schedule. Cron workflow will not stop until it is terminated or cancelled (by returning cadence.CanceledError).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The cron spec is as following:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ┌───────────── minute (0 - 59)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ ┌───────────── hour (0 - 23)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ │ ┌───────────── day of the month (1 - 31)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ │ │ ┌───────────── month (1 - 12)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ │ │ │ │")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// │ │ │ │ │")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * * * * *")]),t._v("\nCronSchedule "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n")])])]),s("p",[t._v("The "),s("a",{attrs:{href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"}},[t._v("crontab guru site"),s("OutboundLink")],1),t._v(" is useful for testing your cron expressions.")]),t._v(" "),s("h2",{attrs:{id:"convert-existing-cron-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-existing-cron-workflow"}},[t._v("#")]),t._v(" Convert existing cron workflow")]),t._v(" "),s("p",[t._v("Before CronSchedule was available, the previous approach to implementing cron\n"),s("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" was to use a delay timer as the last step and then return\n"),s("code",[t._v("ContinueAsNew")]),t._v(". One problem with that implementation is that if the "),s("Term",{attrs:{term:"workflow"}}),t._v("\nfails or times out, the cron would stop.")],1),t._v(" "),s("p",[t._v("To convert those "),s("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" to make use of Cadence CronSchedule, all you need is to\nremove the delay timer and return without using\n"),s("code",[t._v("ContinueAsNew")]),t._v(". Then start the "),s("Term",{attrs:{term:"workflow"}}),t._v(" with the desired CronSchedule.")],1),t._v(" "),s("h2",{attrs:{id:"retrieve-last-successful-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-last-successful-result"}},[t._v("#")]),t._v(" Retrieve last successful result")]),t._v(" "),s("p",[t._v("Sometimes it is useful to obtain the progress of previous successful runs.\nThis is supported by two new APIs in the client library:\n"),s("code",[t._v("HasLastCompletionResult")]),t._v(" and "),s("code",[t._v("GetLastCompletionResult")]),t._v(". Below is an example of how\nto use this in Go:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CronWorkflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CronResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    startTimestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default start from 0 time.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HasLastCompletionResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" progress CronResult\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLastCompletionResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("progress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            startTimestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" progress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastSyncTimestamp\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    endTimestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Process work between startTimestamp (exclusive), endTimestamp (inclusive).")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Business logic implementation goes here.")]),t._v("\n\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" CronResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LastSyncTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" endTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Note that this works even if one of the cron schedule runs failed. The\nnext schedule will still get the last successful result if it ever successfully\ncompleted at least once. For example, for a daily cron "),s("Term",{attrs:{term:"workflow"}}),t._v(", if the first day\nrun succeeds and the second day fails, then the third day run will still get\nthe result from first day's run using these APIs.")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);