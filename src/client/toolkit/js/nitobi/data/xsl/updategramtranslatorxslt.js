/*
 * Nitobi Complete UI 1.0
 * Copyright(c) 2008, Nitobi
 * support@nitobi.com
 * 
 * http://www.nitobi.com/license
 */
var updategramTranslatorXslxslt='<?xml version="1.0"?> <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:eba="http://www.ebusinessapplications.ca/ebagrid#"> <xsl:output method="xml" encoding="utf-8" omit-xml-declaration="yes"/> <x:p-x:n-datasource-id"x:s-\'_default\'"></x:p-> <x:p-x:n-xkField" ></x:p-> <x:t- match="/"> <root> <x:at-x:s-//eba:datasource[@id=$datasource-id]/eba:data/eba:e" /> </root> </x:t-> <x:t- match="eba:e"> <x:c-> <x:wh- test="@xac=\'d\'"> <delete xi="{@xi}" xk="{@*[name() = $xkField]}"></delete> </x:wh-> <x:wh- test="@xac=\'i\'"> <insert><xsl:copy-ofx:s-@*[not(name() = $xkField) and not(name() = \'xac\')]" /><xsl:attributex:n-xk"><x:v-x:s-@*[name() = $xkField]" /></xsl:attribute></insert> </x:wh-> <x:wh- test="@xac=\'u\'"> <update><xsl:copy-ofx:s-@*[not(name() = $xkField) and not(name() = \'xac\')]" /><xsl:attributex:n-xk"><x:v-x:s-@*[name() = $xkField]" /></xsl:attribute></update> </x:wh-> </x:c-> </x:t-> </xsl:stylesheet> ';
updategramTranslatorXslxslt=updategramTranslatorXslxslt.replace(/x:c-/g, 'xsl:choose').replace(/x\:wh\-/g, 'xsl:when').replace(/x\:o\-/g, 'xsl:otherwise').replace(/x\:n\-/g, ' name="').replace(/x\:s\-/g, ' select="').replace(/x\:va\-/g, 'xsl:variable').replace(/x\:v\-/g, 'xsl:value-of').replace(/x\:ct\-/g, 'xsl:call-template').replace(/x\:w\-/g, 'xsl:with-param').replace(/x\:p\-/g, 'xsl:param').replace(/x\:t\-/g, 'xsl:template').replace(/x\:at\-/g, 'xsl:apply-templates')