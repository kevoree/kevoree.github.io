module Jekyll
  module SidebarItemFilter
    def sidebar_link(item, group, section)
      forceInternal = item["forceInternal"]

      pageID = @context.registers[:page]["id"]
      itemID = item["id"]
      if section
        href = item["href"] || "/#{group}/#{section}/#{itemID}.html"
      else
        href = item["href"] || "/#{group}/#{itemID}.html"
      end
      classes = []
      if pageID == itemID
        classes.push("active")
      end
      if item["href"] && (forceInternal == nil)
        classes.push("external")
      end
      className = classes.size > 0  ? " class=\"#{classes.join(' ')}\"" : ""

      return "<a href=\"#{href}\"#{className}>#{item["title"]}</a>"
    end

  end
end

Liquid::Template.register_filter(Jekyll::SidebarItemFilter)
