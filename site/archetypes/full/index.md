+++
title = '{{ site.Title }}'
subtitle = ''
description = ''
author = '{{ site.Params.author }}'
authorURL = '{{ site.BaseURL }}'
date = '{{ .Date }}'
tags = []
keywords = []
draft = false

slug = 'example'
spa = {{ site.Params.config.spa }}
noindex = false
+++

# Content

{{< template "module" "Inserted via a local template!" >}}
